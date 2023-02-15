import { FC, ReactNode, useRef, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useAppDispatch, useAppSelector } from "../../redux";
import { actions } from "../../redux/reducer";
import Link from "../Link";

export enum TabKeys {
    tab1,
    tab2,
}

interface Props {
    title: string;
    children?: ReactNode
};

export const Card: FC<Props> = ({ title, children }): JSX.Element => {
    // const [link, setLink] = useState<string | null>(null);
    const state = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();

    const [link, setLink] = useState<TabKeys>(TabKeys.tab1);
    const [val, setVal] = useState<string>();
    const ref = useRef<HTMLDivElement>(null);

    const onInputChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        setVal(e.target.value);
    };

    // dispatch(actions.increment(1));
    dispatch({ type: 'INCREMENT', payload: 1 });

    return (
        <div ref={ref} >
            <input type="text" onChange={(e) => onInputChange(e)}/>
            <button onClick={() => setLink(TabKeys.tab1)}>tab1</button>
            <button onClick={() => setLink(TabKeys.tab2)}>tab2</button>
            <span>{title}</span>
            <div>
                {children}
            </div>
            <Link href='asd' onClick={setLink} >Press me</Link>
        </div>
    );
};