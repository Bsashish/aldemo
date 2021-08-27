import { useState } from 'react';
import styled from 'styled-components';


interface IProps {
  tabs: any,
  isTabsHidden: boolean
  render: (index: number, changeTab: (index: number) => void) => JSX.Element
  minWidthInContent?: string
}
type SelectedText = {
  isActive?: number;
  label?: string;
  index?: number;
};
export default function TabBar(props: IProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { tabs, render, minWidthInContent } = props
  const handleChange = (each) => {
    setCurrentIndex(each.id)
  }
  return (
    <TabContainer>
      <TabWrapper>
        {
          tabs && tabs.map((each, index) => (
            <SelectTab
              isActive={currentIndex}
              onClick={() => handleChange(each)}
              index={index}
              key={index}
            >
              {each.name}
            </SelectTab>
          ))
        }
      </TabWrapper>
      <TabContent minWidthInContent={minWidthInContent}>{render(currentIndex, handleChange)}</TabContent>
    </TabContainer>
  )
}



const SelectTab = styled.label<SelectedText>`
  background-color: ${({ isActive, index, theme }) =>
    isActive === index ? theme.colors.darkBlue : theme.colors.white};
  color: ${({ isActive, index, theme }) =>
    isActive === index ? theme.colors.white : theme.colors.darkGrey};
  padding: 14px 54px;
  border-radius: ${({ isActive, index }) => isActive === index && '12px'};
  font-weight: ${({ isActive, index, theme }) =>
    isActive === index ? 600 : 500};

  &:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;


const TabContainer: any = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: ${(props: any) => props.minWidthInContent || '0px'};
`;


const TabWrapper = styled.div`
    display: flex;
    margin: 0 0 10px;
    border-bottom: 1px solid #aaa;
`;

const TabContent: any = styled.div`
	min-width: ${(props: any) => props.minWidthInContent || 'initial'};
`;