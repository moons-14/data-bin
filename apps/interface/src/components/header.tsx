import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarTrigger,
} from "@/components/ui/menubar";

export const Header = () => {
	return (
		<Menubar className="rounded-none border-b border-none px-2 lg:px-4">
			<MenubarMenu>
				<MenubarTrigger className="font-bold">DataBin</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>About DataBin</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>Preferences</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Account</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>moons@moons14.com</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>Logout</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
};
