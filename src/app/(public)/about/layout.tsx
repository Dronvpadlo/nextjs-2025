import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'AboutLayout metadata'
}
type Props = { children: React.ReactNode }
const AboutLayout = ({children}: Props) => {
    return (
        <div>
            About Layout
            {children}
        </div>
    );
};

export default AboutLayout;
