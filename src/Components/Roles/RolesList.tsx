import * as React from "react";
import CryptoJS from "crypto-js";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { styled, alpha } from "@mui/material/styles";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import { getRoles } from "../../apiServices/apiFetch";

const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.content}`]: {
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0.2, 0),
  },
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

function ExpandIcon(props: React.PropsWithoutRef<typeof AddBoxRoundedIcon>) {
  return <AddBoxRoundedIcon {...props} sx={{ opacity: 0.8 }} />;
}

function CollapseIcon(
  props: React.PropsWithoutRef<typeof IndeterminateCheckBoxRoundedIcon>
) {
  return <IndeterminateCheckBoxRoundedIcon {...props} sx={{ opacity: 0.8 }} />;
}

function EndIcon(
  props: React.PropsWithoutRef<typeof DisabledByDefaultRoundedIcon>
) {
  return <DisabledByDefaultRoundedIcon {...props} sx={{ opacity: 0.3 }} />;
}

export default function RolesList({ setEmpRole }: { setEmpRole: any }) {
  const [orgDtaa, setOrgData] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getRoles({
      companyId: "6de8c99d-191a-4c6b-bd7f-48e273168565",
    });
    console.log("sayugadjadadsad", response);
    setOrgData(response);
  };

  function renderTreeItems(data: any, reportingToId = "null") {
    if (!data[reportingToId]) return null;

    return data[reportingToId].map((role: any) => (
      <CustomTreeItem
        key={role.currentId}
        itemId={role.currentId.toString()}
        label={
          <div
            onClick={(event) => {
              event.stopPropagation();
              setEmpRole(role);
              console.log("Selected role:", role);
            }}
          >
            {role.positionName}
          </div>
        }
      >
        {renderTreeItems(data, role.currentId)}
      </CustomTreeItem>
    ));
  }
  return (
    <SimpleTreeView
      aria-label="customized"
      // defaultExpandedItems={["1", "3"]}
      slots={{
        expandIcon: ExpandIcon,
        collapseIcon: CollapseIcon,
        endIcon: EndIcon,
      }}
      sx={{ overflowX: "hidden", minHeight: 270, flexGrow: 1, maxWidth: 300 }}
    >
      {renderTreeItems(orgDtaa)}
    </SimpleTreeView>
  );
}
