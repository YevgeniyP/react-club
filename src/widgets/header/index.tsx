import { PageContainer } from "../../shared/ui";

export default function Header() {
  return (
    <header>
      <div className="bg-main-green">
        <PageContainer extraStyles="py-[16px] flex justify-between">
          <h2 className="font-rubik text-white text-base">
            Welcome to our online shop
          </h2>
          <p className="font-rubik text-white text-base">Login | Sign up</p>
        </PageContainer>
      </div>
      <PageContainer extraStyles="py-[21px] flex justify-between">
        <div>LOGO</div>
        <div className="h-[46px]">Search</div>
        <div>Icons</div>
      </PageContainer>
      <div className="bg-menu-gray-bg">
        <PageContainer extraStyles="h-[67px]">MENU</PageContainer>
      </div>
    </header>
  );
}
