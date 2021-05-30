/* eslint-disable no-undef */
/* eslint-disable react/display-name */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_DATA_SAGA } from 'src/store/types';
import Button from 'src/screens/components/button';

import { useTranslation } from 'react-i18next';

export default (): JSX.Element => {
    const dispatch = useDispatch();

    //
    const { t } = useTranslation();

    type TData = {
        reducer: {
            loading: boolean;
            data: any;
        };
    };
    const { data } = useSelector((state: TData) => state?.reducer);

    return (
        <>
            <Button onClick={() => dispatch({ type: FETCH_DATA_SAGA })}>{t('send.request')}</Button>
            {data && data?.berry && <div> url : {data?.berry}</div>}
        </>
    );
};
