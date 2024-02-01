import Spinner from "@/utils/forms/spinner"
import { ButtonProps } from "@/types_and_interfaces/types";

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <>
            <button className={props.class} type={props.type} disabled={props.disabled ? props.disabled : props.Loader} onClick={props.onClick} >
                {props.Loader === false ? props.Text : <Spinner class={`text-light ${props.spinnerClass}`} />}
            </button>
        </>
    );
};
