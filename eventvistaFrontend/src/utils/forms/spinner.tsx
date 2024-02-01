import { SpinnerProps } from "@/types_and_interfaces/types"

const Spinner: React.FC<SpinnerProps> = (props) => {

    return (<div className={`spinner-border ` + props.class} style={{ verticalAlign: 'middle' }} ></div >)

}
export default Spinner