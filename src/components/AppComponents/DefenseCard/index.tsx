import { SvgIcon, SvgIconTypeMap } from "@material-ui/core"
import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import { Check, SvgIconComponent } from "@material-ui/icons"
import React, { ReactElement } from "react"
import styled from "styled-components"

const DefenseCardBase = styled("div")`
  background-color: #fff;
  height: 250px;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 35px;
  margin-bottom: 35px;
  position: relative;

  @media (min-width: 1024px) {
    height: 234px;
    width: 345px;
  }
`

const DefenseCardIconContainer = styled("div")`
  border-radius: 50%;
  width: 61px;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #112233;
  position: absolute;
  top: 0;
  transform: translate(-15px, -15px);

  @media (min-width: 1024px) {
    width: 91px;
    height: 91px;
  }
`

const DefenseCardIcon = styled("div")`
  & .icon {
    fill: #fff;
    font-size: 40px;
  }
`

const DefenseCardInner = styled("div")`
  display: grid;
  grid-template-rows: 0.7fr 1.3fr;
  height: 100%;
  text-align: center;
  justify-items: center;
`

const DefenseCardTitle = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #333;
  font-family: "Suez One";
  padding-top: 5px;
  width: 50%;

  @media (min-width: 1024px) {
    /* padding-left: 45px; */
  }
`

const DefenseCardText = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
`

interface DefenseCard {
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  title: string
  text: string
}

const DefenseCard: React.FC<DefenseCard> = ({
  icon = Check,
  title = "Placeholder title",
  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio enim consequuntur ad inventore! Sapiente accusamus reiciendis tempore assumenda labore. Nobis, illo eaque. Debitis itaque natus, quasi nam culpa iure libero.",
}) => {
  return (
    <div>
      <DefenseCardBase>
        <DefenseCardIconContainer>
          <DefenseCardIcon>
            <SvgIcon fontSize="inherit" className={"icon"} component={icon} />
          </DefenseCardIcon>
        </DefenseCardIconContainer>

        <DefenseCardInner>
          <DefenseCardTitle>{title}</DefenseCardTitle>
          <DefenseCardText>{text}</DefenseCardText>
        </DefenseCardInner>
      </DefenseCardBase>
    </div>
  )
}

export default DefenseCard
