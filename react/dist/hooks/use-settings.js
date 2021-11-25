import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSettings } from '../store/modules/settings';
export function useSettings() {
    var dispatch = useDispatch();
    var settings = useSelector(function (state) { return state.settings; });
    useEffect(function () {
        dispatch(getSettings());
    }, [dispatch]);
    return { settings: settings };
}
