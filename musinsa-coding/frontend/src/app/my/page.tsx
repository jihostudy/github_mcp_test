import DashboardProfile from "@/components/my/DashboardProfile";
import OrderStatusBar from "@/components/my/OrderStatusBar";
import BenefitSummary from "@/components/my/BenefitSummary";
import MenuList from "@/components/my/MenuList";
import { mockUserProfile, mockDashboardData } from "@/data/mock/user";
import { dashboard } from "./page.css";

export default function MyPage() {
  return (
    <div className={dashboard}>
      <DashboardProfile user={mockUserProfile} />
      <OrderStatusBar summary={mockDashboardData.orderSummary} />
      <BenefitSummary
        points={mockDashboardData.points}
        couponCount={mockDashboardData.couponCount}
      />
      <MenuList />
    </div>
  );
}
