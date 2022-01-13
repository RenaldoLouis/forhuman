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
    const [firstTimeToShop, setFirstTimeToShop] = useState(true);
    const [toastPopup, setToastPopup] = useState({});
    const [isFirstTimeLoadShop, setFirstTimeLoadShop] = useState(true);
    const [shopPageHeight, setShopPageHeight] = useState()
    const [selectedDetailData, setSelectedDetailData] = useState({})

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
        shopPageHeight,
        isFirstTimeLoadShop,
        setFirstTimeLoadShop,
        selectedDetailData,
        setSelectedDetailData
    };

    useEffect(() => {
        document.addEventListener('readystatechange', event => {
            // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
            if (location.pathname === "/shop") {
                setOnHome(false)
                if (firstTimeToShop) {
                    setFirstTimeToShop(false)
                    setTimeout(() => {
                        var containerHeight = document.getElementById('mainBodyShop').offsetHeight
                        console.log("tinggi", containerHeight)
                        setShopPageHeight(containerHeight)
                    }, 1);
                }
            }
        });
    }, [location.pathname])

    return (
        <DataContext.Provider value={DataContextValue}>
            {props.children}
        </DataContext.Provider>
    );
};
