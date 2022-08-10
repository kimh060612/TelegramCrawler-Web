import { NextPage } from 'next';

interface Props {
    id: string;
    name: string;
    onChange: (event: any) => void;
    label: string;
    message: string;
    errorMessage?: string;
    placeholder?: string;
    max?: number;
    required?: boolean;
    preValue?: string | number;
    type?: 'text' | 'number' | 'password';
}

const LoginInputContainer: NextPage<Props> = ({
    label,
    message,
    name,
    preValue,
    onChange,
    max,
    placeholder,
    required,
    type='text',
    id,
    errorMessage
}) => {
    return (
        <div className='mb-4'>
            <label className='block text-gray-500 text-sm font-bold mb-2' htmlFor={ name }>
                { label }
            </label>
            <input
                className={`appearance-none shadow border ${errorMessage && 'border-red-500'} rounded w-full py-2 px-3 mb-2 text-gray-700`}
                name={name}
                type={type}
                onChange={onChange}
                defaultValue={preValue}
                maxLength={max}
                id={id}
                placeholder={placeholder}
                required={required}
            />
            <p className={`${!!errorMessage ? 'text-red-500' : 'text-green-500'} text-xs italic`}>
                {!!errorMessage ? errorMessage : message}
            </p>
        </div>
    );
}

export default LoginInputContainer;