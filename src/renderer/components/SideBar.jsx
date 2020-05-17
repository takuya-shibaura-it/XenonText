import {FileSelector} from "../components/index";
import React from "react";

export default function SideBar () {

    return (
        <div className="w-full flex flex-col flex-auto mt-10">
            <FileSelector />
        </div>
    );

}