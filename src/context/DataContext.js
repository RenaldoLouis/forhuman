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
    const [cookie, setCookie] = useCookies(["token", "filter", "filterOverview"]);
    const [isLoading, setLoading] = useState(false);
    const [isHome, setOnHome] = useState(true);
    const [toastPopup, setToastPopup] = useState({});

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
        isHome
    };

    return (
        <DataContext.Provider value={DataContextValue}>
            {props.children}
        </DataContext.Provider>
    );
};
