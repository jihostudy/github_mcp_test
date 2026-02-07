import type { UserAddress } from "@/types";

export const mockAddresses: UserAddress[] = [
  {
    id: 1,
    name: "집",
    phone: "010-1234-5678",
    zipCode: "06134",
    address1: "서울특별시 강남구 테헤란로 427",
    address2: "위워크 타워 12층",
    isDefault: true,
  },
  {
    id: 2,
    name: "회사",
    phone: "010-1234-5678",
    zipCode: "04533",
    address1: "서울특별시 중구 한강대로 416",
    address2: "서울스퀘어 15층",
    isDefault: false,
  },
  {
    id: 3,
    name: "부모님댁",
    phone: "010-9876-5432",
    zipCode: "13529",
    address1: "경기도 성남시 분당구 판교역로 235",
    address2: "에이치스퀘어 N동",
    isDefault: false,
  },
];
