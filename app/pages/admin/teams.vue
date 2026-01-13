<script setup lang="ts">
definePageMeta({
    middleware: ['authenticated'],
    layout: 'admin'
})

const toast = useToast()

// Types
interface TeamEducation {
    id: number
    education: string
}

interface TeamBarAdmission {
    id: number
    bar_admission: string
}

interface Team {
    id: number
    slug: string
    name: string
    image: string
    image_card: string | null
    email: string | null
    linkedin: string | null
    description: string | null
    role_id: number
    educations?: TeamEducation[]
    bar_admissions?: TeamBarAdmission[]
}

interface Role {
    id: number
    name: string
    teams: Team[]
}

// State
const roles = useState<Role[]>('roles', () => [])
const loading = useState('loading', () => false)
const selectedRole = useState<Role | null>('selectedRole', () => null)
const selectedTeam = useState<Team | null>('selectedTeam', () => null)
const isRoleModalOpen = useState('isRoleModalOpen', () => false)
const isTeamModalOpen = useState('isTeamModalOpen', () => false)
const isCreateRoleModalOpen = useState('isCreateRoleModalOpen', () => false)
const isCreateTeamModalOpen = useState('isCreateTeamModalOpen', () => false)
const isDeleteRoleConfirmOpen = useState('isDeleteRoleConfirmOpen', () => false)
const isDeleteTeamConfirmOpen = useState('isDeleteTeamConfirmOpen', () => false)
const expandedRoles = useState<Set<number>>('expandedRoles', () => new Set())

// Computed properties for team modal
const isTeamFormModalOpen = computed({
    get: () => isCreateTeamModalOpen.value || isTeamModalOpen.value,
    set: (value: boolean) => {
        isCreateTeamModalOpen.value = false
        isTeamModalOpen.value = false
    }
})

const isEditMode = computed(() => isTeamModalOpen.value && !isCreateTeamModalOpen.value)
const teamModalTitle = computed(() => isEditMode.value ? 'Edit Team' : 'Create Team')
const teamModalSubmitLabel = computed(() => isEditMode.value ? 'Save' : 'Create')

function closeTeamModal() {
    isCreateTeamModalOpen.value = false
    isTeamModalOpen.value = false
}

function submitTeamForm() {
    if (isEditMode.value) {
        saveTeam()
    } else {
        createTeam()
    }
}

// Form data
const roleForm = ref({
    name: '',
})

const teamForm = ref({
    slug: '',
    name: '',
    image: '',
    image_card: '',
    email: '',
    linkedin: '',
    description: '',
    role_id: 0,
    educations: [] as string[],
    bar_admissions: [] as string[],
})

const imageFile = ref<File | null>(null)
const imagePreview = ref<string | null>(null)
const imageCardFile = ref<File | null>(null)
const imageCardPreview = ref<string | null>(null)
const isSlugManuallyEdited = ref(false)

// Generate slug from name
function generateSlug(name: string): string {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, and multiple hyphens with single hyphen
        .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

// Fetch roles with teams
async function fetchRoles() {
    loading.value = true
    try {
        const req = await $fetch('/api/admin/roles', { method: 'GET' })
        roles.value = req
    } catch (error: any) {
        toast.add({
            title: 'Error',
            description: error.data?.message || 'Failed to fetch roles',
            color: 'error',
        })
    } finally {
        loading.value = false
    }
}

// Toggle role expansion
function toggleRole(roleId: number) {
    if (expandedRoles.value.has(roleId)) {
        expandedRoles.value.delete(roleId)
    } else {
        expandedRoles.value.add(roleId)
    }
}

// Open role edit modal
function openRoleEdit(role: Role) {
    selectedRole.value = role
    roleForm.value = {
        name: role.name,
    }
    isRoleModalOpen.value = true
}

// Create role
function openCreateRole() {
    selectedRole.value = null
    roleForm.value = {
        name: '',
    }
    isCreateRoleModalOpen.value = true
}

async function createRole() {
    try {
        const newRole = await $fetch('/api/admin/roles', {
            method: 'POST',
            body: roleForm.value,
        })

        // Add to local state
        roles.value.push({
            ...newRole,
            teams: [],
        })
        roles.value.sort((a, b) => a.name.localeCompare(b.name))

        toast.add({
            title: 'Success',
            description: 'Role created successfully',
            color: 'success',
        })

        isCreateRoleModalOpen.value = false
    } catch (error: any) {
        toast.add({
            title: 'Error',
            description: error.data?.message || 'Failed to create role',
            color: 'error',
        })
    }
}

// Save role
async function saveRole() {
    if (!selectedRole.value) return

    try {
        const updatedRole = await $fetch(`/api/admin/roles/${selectedRole.value.id}`, {
            method: 'PUT',
            body: roleForm.value,
        })

        // Update in local state
        const index = roles.value.findIndex(r => r.id === selectedRole.value!.id)
        if (index !== -1) {
            roles.value[index]!.name = updatedRole.name
        }

        toast.add({
            title: 'Success',
            description: 'Role updated successfully',
            color: 'success',
        })

        isRoleModalOpen.value = false
    } catch (error: any) {
        toast.add({
            title: 'Error',
            description: error.data?.message || 'Failed to update role',
            color: 'error',
        })
    }
}

// Delete role
function openDeleteRole(role: Role) {
    selectedRole.value = role
    isDeleteRoleConfirmOpen.value = true
}

async function deleteRole() {
    if (!selectedRole.value) return

    try {
        await $fetch(`/api/admin/roles/${selectedRole.value.id}`, {
            method: 'DELETE',
        })

        // Remove from local state
        roles.value = roles.value.filter(r => r.id !== selectedRole.value!.id)

        toast.add({
            title: 'Success',
            description: 'Role deleted successfully',
            color: 'success',
        })

        isDeleteRoleConfirmOpen.value = false
        selectedRole.value = null
    } catch (error: any) {
        toast.add({
            title: 'Error',
            description: error.data?.message || 'Failed to delete role',
            color: 'error',
        })
    }
}

// Create team
function openCreateTeam() {
    selectedTeam.value = null
    teamForm.value = {
        slug: '',
        name: '',
        image: '',
        image_card: '',
        email: '',
        linkedin: '',
        description: '',
        role_id: roles.value[0]?.id || 0,
        educations: [],
        bar_admissions: [],
    }
    imageFile.value = null
    imagePreview.value = null
    imageCardFile.value = null
    imageCardPreview.value = null
    isCreateTeamModalOpen.value = true
}

async function createTeam() {
    try {
        // Upload image if file selected
        if (imageFile.value) {
            try {
                teamForm.value.image = await uploadImageFile(imageFile.value, teamForm.value.image)
            } catch (uploadError) {
                console.error('Image upload failed:', uploadError)
            }
        }
        if (imageCardFile.value) {
            try {
                teamForm.value.image_card = await uploadImageFile(imageCardFile.value, teamForm.value.image_card)
            } catch (uploadError) {
                console.error('Image card upload failed:', uploadError)
            }
        }

        const newTeam = await $fetch('/api/admin/teams', {
            method: 'POST',
            body: teamForm.value,
        })

        // Add to local state
        const roleIndex = roles.value.findIndex(r => r.id === teamForm.value.role_id)
        if (roleIndex !== -1) {
            roles.value[roleIndex]!.teams.push(newTeam)
            roles.value[roleIndex]!.teams.sort((a, b) => a.name.localeCompare(b.name))
        }

        toast.add({
            title: 'Success',
            description: 'Team created successfully',
            color: 'success',
        })

        isCreateTeamModalOpen.value = false
        imageFile.value = null
        imagePreview.value = null
        imageCardFile.value = null
        imageCardPreview.value = null
    } catch (error: any) {
        toast.add({
            title: 'Error',
            description: error.data?.message || 'Failed to create team',
            color: 'error',
        })
    }
}

// Open team edit modal
async function openTeamEdit(team: Team) {
    try {
        // Fetch full team details with educations and bar_admissions
        const fullTeam = await $fetch(`/api/admin/roles/${team.role_id}`)
        const teamDetails = fullTeam.teams.find((t: Team) => t.id === team.id)

        if (teamDetails) {
            selectedTeam.value = teamDetails
            teamForm.value = {
                slug: teamDetails.slug,
                name: teamDetails.name,
                image: teamDetails.image,
                image_card: teamDetails.image_card || '',
                email: teamDetails.email || '',
                linkedin: teamDetails.linkedin || '',
                description: teamDetails.description || '',
                role_id: teamDetails.role_id,
                educations: teamDetails.educations?.map((e: TeamEducation) => e.education) || [],
                bar_admissions: teamDetails.bar_admissions?.map((b: TeamBarAdmission) => b.bar_admission) || [],
            }
            imagePreview.value = teamDetails.image
            imageCardPreview.value = teamDetails.image_card || ''
            imageFile.value = null
            imageCardFile.value = null
            isSlugManuallyEdited.value = true // Keep existing slug in edit mode
            isTeamModalOpen.value = true
        }
    } catch (error: any) {
        toast.add({
            title: 'Error',
            description: error.data?.message || 'Failed to fetch team details',
            color: 'error',
        })
    }
}

// Handle image file selection
function handleImageSelect(event: Event) {
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
        imageFile.value = target.files[0]
        const reader = new FileReader()
        reader.onload = (e) => {
            imagePreview.value = e.target?.result as string
        }
        reader.readAsDataURL(imageFile.value)
    }
}

function handleImageCardSelect(event: Event) {
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
        imageCardFile.value = target.files[0]
        const reader = new FileReader()
        reader.onload = (e) => {
            imageCardPreview.value = e.target?.result as string
        }
        reader.readAsDataURL(imageCardFile.value)
    }
}

// Upload image
async function uploadImageFile(file: File | null, existingUrl: string): Promise<string> {
    if (!file) {
        return existingUrl // Return existing image if no new file
    }

    try {
        // Convert file to base64
        const base64 = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => {
                const result = reader.result as string
                resolve(result)
            }
            reader.onerror = reject
            reader.readAsDataURL(file)
        })

        const result = await $fetch('/api/admin/upload', {
            method: 'POST',
            body: {
                file: base64,
                filename: file.name,
                contentType: file.type,
            },
        })

        return result.url
    } catch (error: any) {
        toast.add({
            title: 'Error',
            description: error.data?.message || 'Failed to upload image',
            color: 'error',
        })
        throw error
    }
}

// Save team
async function saveTeam() {
    if (!selectedTeam.value) return

    try {
        // Upload image if new file selected
        if (imageFile.value) {
            try {
                teamForm.value.image = await uploadImageFile(imageFile.value, teamForm.value.image)
            } catch (uploadError) {
                // If upload fails, use existing image
                console.error('Image upload failed, using existing image:', uploadError)
            }
        }
        if (imageCardFile.value) {
            try {
                teamForm.value.image_card = await uploadImageFile(imageCardFile.value, teamForm.value.image_card)
            } catch (uploadError) {
                console.error('Image card upload failed, using existing image:', uploadError)
            }
        }

        const updatedTeam = await $fetch(`/api/admin/teams/${selectedTeam.value.id}`, {
            method: 'PUT',
            body: teamForm.value,
        })

        // Remove team from old role if role_id changed
        const oldRoleIndex = roles.value.findIndex(r => r.id === selectedTeam.value!.role_id)
        if (oldRoleIndex !== -1 && selectedTeam.value.role_id !== teamForm.value.role_id) {
            roles.value[oldRoleIndex]!.teams = roles.value[oldRoleIndex]!.teams.filter(
                (t: Team) => t.id !== selectedTeam.value!.id
            )
        }

        // Add/update team in new role
        const newRoleIndex = roles.value.findIndex(r => r.id === teamForm.value.role_id)
        if (newRoleIndex !== -1) {
            const teamIndex = roles.value[newRoleIndex]!.teams.findIndex(t => t.id === selectedTeam.value!.id)
            if (teamIndex !== -1) {
                roles.value[newRoleIndex]!.teams[teamIndex] = updatedTeam
            } else {
                roles.value[newRoleIndex]!.teams.push(updatedTeam)
            }
            // Sort teams by name
            roles.value[newRoleIndex]!.teams.sort((a, b) => a.name.localeCompare(b.name))
        }

        toast.add({
            title: 'Success',
            description: 'Team updated successfully',
            color: 'success',
        })

        isTeamModalOpen.value = false
        imageFile.value = null
        imagePreview.value = null
        imageCardFile.value = null
        imageCardPreview.value = null
    } catch (error: any) {
        toast.add({
            title: 'Error',
            description: error.data?.message || 'Failed to update team',
            color: 'error',
        })
    }
}

// Add education field
function addEducation() {
    teamForm.value.educations.push('')
}

// Remove education field
function removeEducation(index: number) {
    teamForm.value.educations.splice(index, 1)
}

// Add bar admission field
function addBarAdmission() {
    teamForm.value.bar_admissions.push('')
}

// Remove bar admission field
function removeBarAdmission(index: number) {
    teamForm.value.bar_admissions.splice(index, 1)
}

// Watch name field to auto-generate slug
watch(() => teamForm.value.name, (newName) => {
    if (!isSlugManuallyEdited.value && newName) {
        teamForm.value.slug = generateSlug(newName)
    }
})

// Handle slug manual edit
function onSlugInput() {
    isSlugManuallyEdited.value = true
}

// Delete team
function openDeleteTeam(team: Team) {
    selectedTeam.value = team
    isDeleteTeamConfirmOpen.value = true
}

async function deleteTeam() {
    if (!selectedTeam.value) return

    try {
        await $fetch(`/api/admin/teams/${selectedTeam.value.id}`, {
            method: 'DELETE',
        })

        // Remove from local state
        const roleIndex = roles.value.findIndex(r => r.id === selectedTeam.value!.role_id)
        if (roleIndex !== -1) {
            roles.value[roleIndex]!.teams = roles.value[roleIndex]!.teams.filter(
                t => t.id !== selectedTeam.value!.id
            )
        }

        toast.add({
            title: 'Success',
            description: 'Team deleted successfully',
            color: 'success',
        })

        isDeleteTeamConfirmOpen.value = false
        selectedTeam.value = null
    } catch (error: any) {
        toast.add({
            title: 'Error',
            description: error.data?.message || 'Failed to delete team',
            color: 'error',
        })
    }
}

// Initialize
onMounted(() => {
    fetchRoles()
})
</script>

<template>
    <div class="space-y-6">
        <!-- Roles Table -->
        <UCard>
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6">Roles & Teams</h3>
                    <UButton v-if="loading" icon="i-lucide-loader-2" loading />
                    <UButton icon="i-lucide-plus" size="sm" @click="openCreateRole">
                        Create Role
                    </UButton>
                </div>
            </template>

            <div v-if="loading && roles.length === 0" class="flex justify-center py-8">
                <UIcon name="i-lucide-loader-2" class="size-8 animate-spin" />
            </div>

            <div v-else class="space-y-4">
                <div v-for="role in roles" :key="role.id" class="border rounded-lg">
                    <!-- Role Header -->
                    <div class="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer rounded-lg"
                        @click="toggleRole(role.id)">
                        <div class="flex items-center gap-4">
                            <UIcon
                                :name="expandedRoles.has(role.id) ? 'i-lucide-chevron-down' : 'i-lucide-chevron-right'"
                                class="size-5" />
                            <div>
                                <h4 class="font-semibold">{{ role.name }}</h4>
                                <p class="text-sm text-gray-500">{{ role.teams.length }} team(s)</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2" @click.stop>
                            <UButton icon="i-lucide-edit" variant="ghost" size="sm" @click="openRoleEdit(role)">
                                Edit
                            </UButton>
                            <UButton icon="i-lucide-trash-2" color="error" variant="ghost" size="sm"
                                @click="openDeleteRole(role)">
                                Delete
                            </UButton>
                        </div>
                    </div>

                    <!-- Teams List -->
                    <div v-if="expandedRoles.has(role.id)" class="border-t bg-gray-50 rounded-b-lg">
                        <div class="p-4 border-b flex justify-end">
                            <UButton icon="i-lucide-plus" size="sm"
                                @click="() => { teamForm.role_id = role.id; openCreateTeam(); }">
                                Add Team
                            </UButton>
                        </div>
                        <div v-if="role.teams.length === 0" class="p-4 text-sm text-gray-500">
                            No teams in this role
                        </div>
                        <div v-else class="divide-y">
                            <div v-for="team in role.teams" :key="team.id"
                                class="p-4 hover:bg-white transition-colors rounded-lg">
                                <div class="flex items-start justify-between gap-4">
                                    <div class="flex items-start gap-4 flex-1">
                                        <NuxtImg v-if="team.image" :src="team.image" :alt="team.name"
                                            class="size-16 object-cover rounded-lg" />
                                        <div class="flex-1 min-w-0">
                                            <h5 class="font-medium">{{ team.name }}</h5>
                                            <p class="text-sm text-gray-500 truncate">{{ team.slug }}</p>
                                            <p v-if="team.description" class="text-sm text-gray-600 mt-1 line-clamp-2"
                                                v-html="team.description"></p>
                                            <div class="flex gap-4 mt-2 text-sm text-gray-500">
                                                <span v-if="team.email">{{ team.email }}</span>
                                                <span v-if="team.linkedin">
                                                    <a :href="team.linkedin" target="_blank"
                                                        class="text-blue-600 hover:underline">
                                                        LinkedIn
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <UButton icon="i-lucide-edit" variant="ghost" size="sm"
                                            @click="openTeamEdit(team)">
                                            Edit
                                        </UButton>
                                        <UButton icon="i-lucide-trash-2" color="error" variant="ghost" size="sm"
                                            @click="openDeleteTeam(team)">
                                            Delete
                                        </UButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UCard>

        <!-- Create Role Modal -->
        <UModal v-model:open="isCreateRoleModalOpen" title="Create Role" :dismissible="false">
            <template #body>
                <div class="space-y-4">
                    <UFormField label="Role Name" required>
                        <UInput v-model="roleForm.name" placeholder="Enter role name" />
                    </UFormField>
                </div>
            </template>
            <template #footer>
                <div class="flex justify-end gap-2">
                    <UButton color="neutral" variant="ghost" @click="isCreateRoleModalOpen = false">
                        Cancel
                    </UButton>
                    <UButton @click="createRole">
                        Create
                    </UButton>
                </div>
            </template>
        </UModal>

        <!-- Role Edit Modal -->
        <UModal v-model:open="isRoleModalOpen" title="Edit Role" :dismissible="false">
            <template #header>
                <h3 class="text-base font-semibold">Edit Role</h3>
            </template>
            <template #body>

                <div class="space-y-4">
                    <UFormField label="Role Name" required>
                        <UInput v-model="roleForm.name" placeholder="Enter role name" />
                    </UFormField>
                </div>
            </template>

            <template #footer>
                <div class="flex justify-end gap-2">
                    <UButton color="neutral" variant="ghost" @click="isRoleModalOpen = false">
                        Cancel
                    </UButton>
                    <UButton @click="saveRole">
                        Save
                    </UButton>
                </div>
            </template>
        </UModal>

        <!-- Delete Role Confirmation Modal -->
        <UModal v-model:open="isDeleteRoleConfirmOpen" title="Delete Role" :dismissible="false">
            <template #body>
                <div class="space-y-4">
                    <p>Are you sure you want to delete the role "{{ selectedRole?.name }}"?</p>
                    <p v-if="selectedRole && selectedRole.teams && selectedRole.teams.length > 0"
                        class="text-sm text-error">
                        This role has {{ selectedRole.teams.length }} team(s). Please remove or reassign teams first.
                    </p>
                </div>
            </template>
            <template #footer>
                <div class="flex justify-end gap-2">
                    <UButton color="neutral" variant="ghost" @click="isDeleteRoleConfirmOpen = false">
                        Cancel
                    </UButton>
                    <UButton color="error" @click="deleteRole"
                        :disabled="selectedRole?.teams && selectedRole.teams.length > 0">
                        Delete
                    </UButton>
                </div>
            </template>
        </UModal>

        <!-- Team Form Modal (Create/Edit) -->
        <UModal v-model:open="isTeamFormModalOpen" :title="teamModalTitle" :dismissible="false"
            class="lg:min-w-[800px]">
            <template #body>
                <div class="space-y-4 max-h-[70vh] overflow-y-auto">
                    <!-- Basic Info -->
                    <div class="space-y-4 grid grid-cols-2 gap-4">
                        <UFormField label="Role" required class="col-span-2">
                            <USelect v-model="teamForm.role_id" :items="roles" labelKey="name" valueKey="id"
                                class="w-full" />
                        </UFormField>

                        <UFormField label="Name" required class="col-span-2">
                            <UInput v-model="teamForm.name" placeholder="Enter team member name" />
                        </UFormField>

                        <!-- <UFormField v-if="!isEditMode" label="Slug" required>
                            <UInput v-model="teamForm.slug" placeholder="Auto-generated from name" disabled
                                @input="onSlugInput" />
                        </UFormField> -->

                        <UFormField label="Email">
                            <UInput v-model="teamForm.email" type="email" placeholder="Enter email" />
                        </UFormField>

                        <UFormField label="LinkedIn">
                            <UInput v-model="teamForm.linkedin" type="url" placeholder="Enter LinkedIn URL" />
                        </UFormField>

                        <UFormField label="Image">
                            <div class="space-y-2">
                                <div v-if="imagePreview" class="relative">
                                    <NuxtImg :src="imagePreview" alt="Preview"
                                        class="size-32 object-cover rounded-lg" />
                                </div>
                                <UInput type="file" accept="image/*" @change="handleImageSelect" />
                            </div>
                        </UFormField>

                        <UFormField label="Image Card">
                            <div class="space-y-2">
                                <div v-if="imageCardPreview" class="relative">
                                    <NuxtImg :src="imageCardPreview" alt="Card preview"
                                        class="size-32 object-cover rounded-lg" />
                                </div>
                                <UInput type="file" accept="image/*" @change="handleImageCardSelect" />
                            </div>
                        </UFormField>

                        <UFormField label="Description" class="col-span-2">
                            <Editor v-model="teamForm.description" />
                        </UFormField>
                    </div>

                    <!-- Educations -->
                    <UFormField label="Educations">
                        <div class="space-y-2">
                            <div v-for="(education, index) in teamForm.educations" :key="index" class="flex gap-2">
                                <UInput v-model="teamForm.educations[index]" placeholder="Enter education" />
                                <UButton icon="i-lucide-x" color="error" variant="ghost" size="sm"
                                    @click="removeEducation(index)" />
                            </div>
                            <UButton icon="i-lucide-plus" variant="outline" size="sm" @click="addEducation">
                                Add Education
                            </UButton>
                        </div>
                    </UFormField>

                    <!-- Bar Admissions -->
                    <UFormField label="Bar Admissions">
                        <div class="space-y-2">
                            <div v-for="(admission, index) in teamForm.bar_admissions" :key="index" class="flex gap-2">
                                <UInput v-model="teamForm.bar_admissions[index]" placeholder="Enter bar admission" />
                                <UButton icon="i-lucide-x" color="error" variant="ghost" size="sm"
                                    @click="removeBarAdmission(index)" />
                            </div>
                            <UButton icon="i-lucide-plus" variant="outline" size="sm" @click="addBarAdmission">
                                Add Bar Admission
                            </UButton>
                        </div>
                    </UFormField>
                </div>
            </template>
            <template #footer>
                <div class="flex justify-end gap-2">
                    <UButton color="neutral" variant="ghost" @click="closeTeamModal">
                        Cancel
                    </UButton>
                    <UButton @click="submitTeamForm">
                        {{ teamModalSubmitLabel }}
                    </UButton>
                </div>
            </template>
        </UModal>

        <!-- Delete Team Confirmation Modal -->
        <UModal v-model:open="isDeleteTeamConfirmOpen" title="Delete Team" :dismissible="false">
            <template #body>
                <div class="space-y-4">
                    <p>Are you sure you want to delete the team "{{ selectedTeam?.name }}"?</p>
                    <p class="text-sm text-gray-500">This action cannot be undone.</p>
                </div>
            </template>
            <template #footer>
                <div class="flex justify-end gap-2">
                    <UButton color="neutral" variant="ghost" @click="isDeleteTeamConfirmOpen = false">
                        Cancel
                    </UButton>
                    <UButton color="error" @click="deleteTeam">
                        Delete
                    </UButton>
                </div>
            </template>
        </UModal>
    </div>
</template>
