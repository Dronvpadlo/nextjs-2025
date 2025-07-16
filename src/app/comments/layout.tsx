import {Metadata} from "next";

export const metadata: Metadata = {
    title: ''
}
type Props = { children: React.ReactNode }
const CommentsLayout = ({children}: Props) => {
    return (
        <div>
            Comments Layout
            {children}
        </div>
    );
};

export default CommentsLayout;