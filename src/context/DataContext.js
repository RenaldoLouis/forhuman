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
import GetApi from "../api/GetApi"

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
    const [listProductData, setListProductData] = useState({})

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

    const getProductFromApi = async () => {
        const dataApi = await GetApi.getProductData();
    }

    useEffect(() => {
        getProductFromApi()
    }, [])

    useEffect(() => {
        document.addEventListener('readystatechange', event => {
            if (location.pathname === "/shop") {
                setTimeout(() => {
                    setOnHome(false)
                }, 1);
                if (firstTimeToShop) {
                    setFirstTimeToShop(false)
                    // setTimeout(() => {
                    //     var containerHeight = document.getElementById('mainBodyShop').offsetHeight
                    //     setShopPageHeight(containerHeight)
                    // }, 1000);
                }
            }
        });
    }, [location.pathname, window.location.href])

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

    return (
        <DataContext.Provider value={DataContextValue}>
            {props.children}
        </DataContext.Provider>
    );
};
