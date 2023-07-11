import type {NextPage} from 'next'
import GenericForm, { FormProps} from "@/components/genericform";

const Form: NextPage = () => {
    const renderForm = ({register, errors, isSubmitting}: FormProps) => {
        return <>
            <label htmlFor="email">Email</label>
            <input type="email" autoComplete="email"
                   {...register("email", {required: true})} />
            <div className="error">{errors.email?.message}</div>
            
            <label htmlFor="date">Date</label>
            <input type="date" {...register("date", {required: true})} />
            <div className="error">{errors.date?.message}</div>
            
            <button disabled={isSubmitting}>
                "Submit"
            </button>
        </>;       
    }
    return <GenericForm url="/api/form" renderForm={renderForm} />
}