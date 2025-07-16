import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'ContactsLayout metadata'
}
type Props = { children: React.ReactNode }
const AboutLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AboutLayout;