import {unmountComponentAtNode} from "react-dom";
import {act, render} from "@testing-library/react";
import Navigation from "./Navigation";
import React from "react";
import App from "../App";

describe("Navigation component", () => {
    test("Matches the snapshot", () => {
        const button = render(<Navigation />);
        expect(button).toMatchSnapshot();
    });
});
