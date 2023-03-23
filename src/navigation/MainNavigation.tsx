import { useAppSelector } from "@hooks/index"
import { isLoginSelector } from "@selector/userSelector"
import StackNavigator from "./StackNavigator"
import TabNavigator from "./TabNavigator"

const MainNavigation = () => {
    const isLogin = useAppSelector<boolean>(isLoginSelector)

    return (
        <>
            {isLogin ? <TabNavigator /> : <StackNavigator />}
        </>
    )
}

export default MainNavigation