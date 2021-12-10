import React, {
    useState,
    createContext,
    useEffect,
    useContext,
    useCallback,
} from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { useLocation } from 'react-router-dom';

export const DataContext = createContext({});

export const DataContextProvider = (props) => {
    const location = useLocation();
    const [cookie, setCookie] = useCookies(["token", "filter", "filterOverview"]);
    const [isLoading, setLoading] = useState(false);
    const [isHome, setOnHome] = useState(true);
    const [toastPopup, setToastPopup] = useState({});
    const [shopPageHeight, setShopPageHeight] = useState()

    const toastify = (type, text) => {
        if (type === "success") {
            toast.success(text, {
                toastId: "success"
            });
        } else if (type === "error") {
            toast.error(text, {
                toastId: "error"
            });
        }
        setToastPopup(!toastPopup);
    }

    const DataContextValue = {
        isLoading,
        setLoading,
        toastify,
        toastPopup,
        setOnHome,
        isHome,
        setShopPageHeight,
        shopPageHeight
    };

    useEffect(() => {
        if (location.pathname === "/shop") {
            setOnHome(false)
            setTimeout(() => {
                console.log("jalan")
                var containerHeight = document.getElementById('mainBodyShop').offsetHeight
                setShopPageHeight(containerHeight)
            }, 1);
        }
    }, [location.pathname])

    return (
        <DataContext.Provider value={DataContextValue}>
            {props.children}
        </DataContext.Provider>
    );
};
