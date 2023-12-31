import React, { LegacyRef } from 'react';

const TinyInputBox = React.forwardRef(
    (
        { placeholder, name, type, borderColor }: { placeholder: string; name: string; type: string, borderColor: string },
        ref: LegacyRef<HTMLInputElement>
    ) => {
        return (
            <div className="lg:mt-3 md:mt-3 xl:mt-3 2xl:mt-3 my-5">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    ref={ref}
                    style={{
                        border: '2px solid',
                        borderColor: borderColor,
                    }}
                    className="bg-[#0D1323] text-[#F5F5F5] text-center 
                    justify-center m-5 text-[1.25rem] border-[#F5F5F5] 
                    border-2 rounded-md p-2 px-4 w-24 h-[6rem] lg:w-32 lg:h-[8rem] md:w-32 md:h-[8rem] xl:w-32 xl:h-[8rem] 2xl:w-32 2xl:h-[8rem]"
                />
            </div>
        );
    }
);

export default TinyInputBox;