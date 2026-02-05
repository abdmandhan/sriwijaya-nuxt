<script setup lang="ts">
import { Ckeditor, useCKEditorCloud } from '@ckeditor/ckeditor5-vue'
import type { EditorConfig } from 'ckeditor5'

const props = defineProps<{
    modelValue?: string | null
    placeholder?: string
}>()

const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void
}>()

const editorValue = computed({
    get: () => props.modelValue ?? '',
    set: (value: string) => emit('update:modelValue', value),
})

const cloud = useCKEditorCloud({
    version: '47.3.0',
    premium: false,
})

const LICENSE_KEY =
    'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3OTk4ODQ3OTksImp0aSI6IjRhODg5NmFjLWExOWItNDcwNS04NTJjLTU0ODYxOTNkODdkOSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJyZW1vdmVGZWF0dXJlcyI6WyJQQiIsIlJGIiwiU0NIIiwiVENQIiwiVEwiLCJUQ1IiLCJJUiIsIlNVQSIsIkI2NEEiLCJMUCIsIkhFIiwiUkVEIiwiUEZPIiwiV0MiLCJGQVIiLCJCS00iLCJGUEgiLCJNUkUiXSwidmMiOiJkODEyM2JhZCJ9.fXwgdDozb3h4Zk8L8k-FT73NIXa7lU51jCWAp9c1BQSxRrUgGhXsRrESvEshtaxux9j0zQ2h19cKOkb3iA_0iw'

const editor = computed(() => cloud.data.value?.CKEditor.ClassicEditor ?? null)

const config = computed<EditorConfig | null>(() => {
    if (!cloud.data.value) {
        return null
    }

    const {
        Autosave,
        Essentials,
        Paragraph,
        LinkImage,
        Link,
        ImageBlock,
        ImageToolbar,
        BlockQuote,
        CloudServices,
        ImageUpload,
        ImageInsertViaUrl,
        AutoImage,
        Table,
        TableToolbar,
        Heading,
        ImageTextAlternative,
        ImageCaption,
        ImageStyle,
        Indent,
        IndentBlock,
        ImageInline,
        List,
        TableCaption,
        TodoList,
        ImageUtils,
        ImageEditing,
        Bold,
        Italic,
        Underline,
        Strikethrough,
        Code,
        Subscript,
        Superscript,
        FontBackgroundColor,
        FontColor,
        FontFamily,
        FontSize,
        Highlight,
        HorizontalLine,
        CodeBlock,
        Alignment,
        GeneralHtmlSupport,
        Style,
    } = cloud.data.value.CKEditor

    return {
        toolbar: {
            items: [
                'undo',
                'redo',
                '|',
                'heading',
                'style',
                '|',
                'fontSize',
                'fontFamily',
                'fontColor',
                'fontBackgroundColor',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'subscript',
                'superscript',
                'code',
                '|',
                'horizontalLine',
                'link',
                'insertTable',
                'highlight',
                'blockQuote',
                'codeBlock',
                '|',
                'alignment',
                '|',
                'bulletedList',
                'numberedList',
                'todoList',
                'outdent',
                'indent',
            ],
            shouldNotGroupWhenFull: true,
        },
        plugins: [
            Alignment,
            AutoImage,
            Autosave,
            BlockQuote,
            Bold,
            CloudServices,
            Code,
            CodeBlock,
            Essentials,
            FontBackgroundColor,
            FontColor,
            FontFamily,
            FontSize,
            GeneralHtmlSupport,
            Heading,
            Highlight,
            HorizontalLine,
            ImageBlock,
            ImageCaption,
            ImageEditing,
            ImageInline,
            ImageInsertViaUrl,
            ImageStyle,
            ImageTextAlternative,
            ImageToolbar,
            ImageUpload,
            ImageUtils,
            Indent,
            IndentBlock,
            Italic,
            Link,
            LinkImage,
            List,
            Paragraph,
            Strikethrough,
            Style,
            Subscript,
            Superscript,
            Table,
            TableCaption,
            TableToolbar,
            TodoList,
            Underline,
        ],
        fontFamily: {
            supportAllValues: true,
        },
        fontSize: {
            options: [10, 12, 14, 'default', 18, 20, 22],
            supportAllValues: true,
        },
        heading: {
            options: [
                {
                    model: 'paragraph',
                    title: 'Paragraph',
                    class: 'ck-heading_paragraph',
                },
                {
                    model: 'heading1',
                    view: 'h1',
                    title: 'Heading 1',
                    class: 'ck-heading_heading1',
                },
                {
                    model: 'heading2',
                    view: 'h2',
                    title: 'Heading 2',
                    class: 'ck-heading_heading2',
                },
                {
                    model: 'heading3',
                    view: 'h3',
                    title: 'Heading 3',
                    class: 'ck-heading_heading3',
                },
                {
                    model: 'heading4',
                    view: 'h4',
                    title: 'Heading 4',
                    class: 'ck-heading_heading4',
                },
                {
                    model: 'heading5',
                    view: 'h5',
                    title: 'Heading 5',
                    class: 'ck-heading_heading5',
                },
                {
                    model: 'heading6',
                    view: 'h6',
                    title: 'Heading 6',
                    class: 'ck-heading_heading6',
                },
            ],
        },
        htmlSupport: {
            allow: [
                {
                    name: /^.*$/,
                    styles: true,
                    attributes: true,
                    classes: true,
                },
            ],
        },
        image: {
            toolbar: [
                'toggleImageCaption',
                'imageTextAlternative',
                '|',
                'imageStyle:inline',
                'imageStyle:wrapText',
                'imageStyle:breakText',
            ],
        },
        licenseKey: LICENSE_KEY,
        link: {
            addTargetToExternalLinks: true,
            defaultProtocol: 'https://',
            decorators: {
                toggleDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: {
                        download: 'file',
                    },
                },
            },
        },
        placeholder: props.placeholder ?? 'Type or paste your content here!',
        style: {
            definitions: [
                {
                    name: 'Article category',
                    element: 'h3',
                    classes: ['category'],
                },
                {
                    name: 'Title',
                    element: 'h2',
                    classes: ['document-title'],
                },
                {
                    name: 'Subtitle',
                    element: 'h3',
                    classes: ['document-subtitle'],
                },
                {
                    name: 'Info box',
                    element: 'p',
                    classes: ['info-box'],
                },
                {
                    name: 'CTA Link Primary',
                    element: 'a',
                    classes: ['button', 'button--green'],
                },
                {
                    name: 'CTA Link Secondary',
                    element: 'a',
                    classes: ['button', 'button--black'],
                },
                {
                    name: 'Marker',
                    element: 'span',
                    classes: ['marker'],
                },
                {
                    name: 'Spoiler',
                    element: 'span',
                    classes: ['spoiler'],
                },
            ],
        },
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
        },
    }
})
</script>

<template>
    <ClientOnly>
        <div class="editor">
            <Ckeditor v-if="editor && config" v-model="editorValue" :editor="editor" :config="config" />
        </div>
    </ClientOnly>
</template>
