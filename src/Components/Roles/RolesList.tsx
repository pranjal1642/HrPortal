import * as React from "react";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { styled, alpha } from "@mui/material/styles";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import { addRoles, getRoles } from "../../apiServices/apiFetch";
import { SubmitHandler, useForm } from "react-hook-form";
import CommonModal from "../common/CommonModal";

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
interface IFormInput {
  designation: string;
  reportingTo: string;
}
export default function RolesList({
  setEmpRole,
  handleClose,
}: {
  setEmpRole?: any;
  handleClose?: any;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const [orgDtaa, setOrgData] = React.useState([]);
  const [addRoleModal, setaddRoleModal] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [roleToAdd, setRoleToAdd] = React.useState<any>({
    positionName: "CEO",
  });
  const [hoveredItemId, setHoveredItemId] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleCloseRoleModal = () => setaddRoleModal(false);
  const handleCloseModal = () => setShowModal(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    try {
      console.log("shshshshhhshshss", data, roleToAdd);
      const payload: any = {
        companyId: "823b84ef-5ef3-4518-8d32-d8fd874f85b8",
        positionName: data?.designation,
        reportingTo: data.reportingTo,
        reportingToId: roleToAdd?.currentId,
      };
      const res = await addRoles(payload);
      if (res) {
        handleCloseRoleModal();
        await fetchData();
      }
      console.log("ashukdadssad", res);
      // if (res) {
      // navigate("/");
      // }
      // console.log(res, "SIGNUP");
    } catch (error) {
      console.error(error, "error In Register");
    }
  };

  const fetchData = async () => {
    const response = await getRoles({
      companyId: "823b84ef-5ef3-4518-8d32-d8fd874f85b8",
    });
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
            onMouseEnter={() => setHoveredItemId(role.currentId.toString())}
            onMouseLeave={() => setHoveredItemId(null)}
            onClick={(event) => {
              event.stopPropagation();
              if (setEmpRole) {
                setEmpRole(role);
                handleClose();
              }
            }}
          >
            {role.positionName}
            {!setEmpRole
              ? hoveredItemId === role.currentId.toString() && (
                  <span
                    onClick={() => {
                      setaddRoleModal(true);
                      setRoleToAdd(role);
                    }}
                  >
                    <PersonAddAltIcon sx={{ opacity: 0.5, height: 20 }} />
                  </span>
                )
              : ""}
          </div>
        }
      >
        {renderTreeItems(data, role.currentId)}
      </CustomTreeItem>
    ));
  }
  return (
    <>
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
      <CommonModal
        showModal={addRoleModal}
        handleClose={handleCloseRoleModal}
        modalTitle="Add Role"
        modalBody={
          <form onSubmit={handleSubmit(onSubmit)} className="employee-form">
            <ul>
              <li>
                <label>Role</label>
                <input
                  {...register("designation", {
                    required: {
                      value: true,
                      message: "Role Name is required",
                    },
                    minLength: {
                      value: 2,
                      message: "Role Name must be at least 2 characters long",
                    },
                    maxLength: {
                      value: 20,
                      message: "Role Name cannot exceed 20 characters",
                    },
                  })}
                  type="text"
                  placeholder="Enter New Role"
                />
                {errors.designation && (
                  <span className="error-msg">
                    {errors.designation.message}
                  </span>
                )}
              </li>
              <li>
                <label>Reports To</label>
                <input
                  {...register("reportingTo", {
                    required: "Reporting To is required",
                  })}
                  type="text"
                  placeholder="Reporting To"
                  onClick={() => setShowModal(true)}
                  value={roleToAdd?.positionName}
                />
                {errors.reportingTo && (
                  <span className="error-msg">
                    {errors.reportingTo.message}
                  </span>
                )}
              </li>
              <input type="submit" value="Add Role" />
            </ul>
          </form>
        }
      />
      <CommonModal
        showModal={showModal}
        modalBody={
          <RolesList setEmpRole={setRoleToAdd} handleClose={handleCloseModal} />
        }
        modalTitle="Roles List"
      />
    </>
  );
}
