import {Block} from "../atoms/Block";
import {Input} from "../atoms/Input";
import {Label} from "../atoms/Label";

export const Field = ({label, ...props}) => (
    <Block>
        <Label>{label}</Label>
        <Input {...props} />
    </Block>
);
