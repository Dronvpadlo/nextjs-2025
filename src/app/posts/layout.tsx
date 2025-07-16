import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'PostsLayout'
}
type Props = { children: React.ReactNode }
const PostsLayout = ({children}: Props) => {
    return (
        <div>
            Page Layout
            {children}
        </div>
    );
};

export default PostsLayout;