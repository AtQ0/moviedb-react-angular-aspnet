import SearchBar from "./SearchBar";
import SidebarTrigger from "./SidebarTrigger";

export default function Header() {
    return (
        <header>
            <nav className="flex flex-col gap-2">
                <div className="flex items-center justify-between font-bold relative h-10 min-sm:hidden">
                    <a href="/">Movies</a>
                    <SidebarTrigger />
                </div>
                <div className="min-sm:h-15 flex items-center ">
                    <SearchBar />
                </div>
            </nav>
        </header>
    );
}