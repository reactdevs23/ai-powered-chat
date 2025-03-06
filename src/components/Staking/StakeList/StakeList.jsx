import { useMemo, useState } from "react";
import classes from "./StakeList.module.css";
import { Dropdown, Heading, Input, Tabs, Text } from "components/common";
import SingleRow from "./SingleRow";

import clsx from "clsx";
import {
  btcLogo,
  ltcLogo,
  linkLogo,
  altLogo,
  bnbLogo,
  ordiLogo,
  etcLogo,
  pythLogo,
  icpLogo,
} from "images";
import Pagination from "components/common/Pagination/Pagination";

const data = [
  {
    logo: btcLogo,
    symbol: "BTC",
    name: "Bitcoin",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Active",
  },
  {
    logo: ltcLogo,
    symbol: "LTC",
    name: "Litecoin",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Active",
  },
  {
    logo: altLogo,
    symbol: "ALT",
    name: "AltLayer",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Active",
  },
  {
    logo: bnbLogo,
    symbol: "BNB",
    name: "Binance Chain Native Token",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Active",
  },
  {
    logo: etcLogo,
    symbol: "ETC",
    name: "Ethereum",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Active",
  },
  {
    logo: ordiLogo,
    symbol: "ORDI",
    name: "Ordinals",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Finished",
  },
  {
    logo: pythLogo,
    symbol: "PYTH",
    name: "Pyth Network",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Active",
  },
  {
    logo: linkLogo,
    symbol: "LINK",
    name: "ChainLink",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Active",
  },
  {
    logo: icpLogo,
    symbol: "ICP",
    name: "Internet Computer",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Finished",
  },
  {
    logo: btcLogo,
    symbol: "BTC",
    name: "Bitcoin",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Active",
  },
  {
    logo: ltcLogo,
    symbol: "LTC",
    name: "Litecoin",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Active",
  },
  {
    logo: altLogo,
    symbol: "ALT",
    name: "AltLayer",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Active",
  },
  {
    logo: bnbLogo,
    symbol: "BNB",
    name: "Binance Chain Native Token",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Active",
  },
  {
    logo: etcLogo,
    symbol: "ETC",
    name: "Ethereum",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Active",
  },
  {
    logo: ordiLogo,
    symbol: "ORDI",
    name: "Ordinals",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Finished",
  },
  {
    logo: pythLogo,
    symbol: "PYTH",
    name: "Pyth Network",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Active",
  },
  {
    logo: linkLogo,
    symbol: "LINK",
    name: "ChainLink",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Active",
  },
  {
    logo: icpLogo,
    symbol: "ICP",
    name: "Internet Computer",
    stakeId: "30d2e6ac9add",
    staked: "41,845.8",
    earned: "2.64",
    status: "Finished",
  },
];

const StakeList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState("Active");

  // items per page dropdwon
  const [showDropdown, setShowDropdown] = useState(false);

  // **Filtering logic**
  const filteredData = data.filter((el) => {
    const matchesStatus = el.status === activeTab;

    const matchesSearch =
      el.symbol.toLowerCase().includes(searchValue.toLowerCase()) ||
      el.name.toLowerCase().includes(searchValue.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  //   pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [filteredData, currentPage, itemsPerPage]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Heading primitive50 lg>
          My Stake List
        </Heading>
        <Tabs
          tabs={["Active", "Finished"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          className={classes.tabs}
          sm
        />
        <Input
          search
          className={classes.searchContainer}
          placeholder="Search"
          value={searchValue}
          setValue={setSearchValue}
        />
      </div>

      <div className={clsx(classes.tableContainer, "overflow")}>
        <table className={classes.table}>
          <tbody>
            <tr>
              <th className={classes.heading}>Coin</th>
              <th className={classes.heading}>Stake ID</th>
              <th className={classes.heading}>Staked</th>
              <th className={classes.heading}>Earned</th>
              <th className={clsx(classes.heading, classes.lastHeading)}>
                Status
              </th>
            </tr>
            {currentTableData.length > 0 ? (
              currentTableData?.map((el, index) => (
                <SingleRow {...el} key={index} />
              ))
            ) : (
              <tr>
                <td colSpan="5" className={classes.item}>
                  <Text base textCenter primitive100>
                    {" "}
                    No matching records found
                  </Text>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className={classes.pagination}>
        <div className={classes.dropdownContainer}>
          <Dropdown
            v2
            items={[5, 10, 20]}
            isActive={showDropdown}
            setIsActive={setShowDropdown}
            selectedValue={itemsPerPage}
            setSelectedValue={setItemsPerPage}
            onSelect={(val) => setItemsPerPage(val)}
          />
          <Text primitive300 xs>
            Records per page
          </Text>
        </div>
        <Pagination
          currentPage={currentPage}
          totalCount={filteredData.length}
          pageSize={itemsPerPage}
          currentItemsCount={currentTableData}
          onPageChange={(page) => setCurrentPage(page)}
          setPageSize={setItemsPerPage}
        />
      </div>
    </div>
  );
};

export default StakeList;
