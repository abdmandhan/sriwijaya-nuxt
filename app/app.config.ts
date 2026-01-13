export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: 'cursor-pointer'
      }
    },
    input: {
      slots: {
        root: 'w-full'
      }

    },
    // formField: {
    //   slots: {
    //     root: 'w-full',
    //     container: 'w-full',
    //     wrapper: 'w-full'
    //   }

    // },
    card: {
      slots: {
        // root: 'max-w-xl'
        // root: 'bg-red-200 ring ring-default divide-y divide-default rounded-lg',
        // header: 'p-4 sm:px-6 bg-red-600',
        // body: 'p-4 sm:p-6',
        // footer: 'p-4 sm:px-6'
      }
    }
  }
})

