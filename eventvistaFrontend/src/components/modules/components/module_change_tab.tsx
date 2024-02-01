import { useGlobal } from "@/hooks/global.hook";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const ModulechangeTabs = () => {

    const { home_mode } = useSelector((state: RootState) => state.global)

    const { change_home_mode } = useGlobal()

    return (
        <>
            <div className="m_c_t pt-80 text-center">
                <button className={`m_t_b ${home_mode == 'events' && 'active'}`} onClick={() => { change_home_mode('events') }}>Events</button>
                <button className={`m_t_b ${home_mode == 'products' && 'active'}`} onClick={() => { change_home_mode('products') }} >Shops</button>
            </div>
        </>
    )
}

export default ModulechangeTabs