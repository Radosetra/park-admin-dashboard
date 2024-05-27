export function MessageAlertDialog({handleSubmit, description, title, toggleOpen}:{
    handleSubmit:()=>Promise<void>,
    toggleOpen:()=>void
    description:string,
    title:string
}) {
    return (
            <div className={"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg"}>
                <div className={"flex flex-col gap-4"}>
                    <div>
                        <h1 className={"text-xl font-semibold text-graydark/80"}>{title}</h1>
                    </div>
                    <div>
                        <p className={"text-graydark/70"}>
                            {description}
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-5">
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleSubmit()}
                    >
                        Yes
                    </button>

                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => toggleOpen()}
                    >
                        No
                    </button>

                </div>
            </div>
    )
}
