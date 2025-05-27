import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handlePopUp } from 'store/authSlice';
import { switchup } from 'store/authSlice';

const HashRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#signup') {
                dispatch(handlePopUp(true));
                dispatch(switchup('up'));
            }
        };

        // Check hash on initial load
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [dispatch]);

    return null;
};

export default HashRouter; 