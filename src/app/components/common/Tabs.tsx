import { Fragment, useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

type SelectedTextType = {
  isActive?: number;
  index?: number;
};

interface IProps {
  tabs: any;
  render: (index: number) => JSX.Element;
  rightSection?: () => JSX.Element;
  minWidthInContent?: string;
}

export const Tabs = ({
  tabs,
  render,
  minWidthInContent,
  rightSection,
}: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // to set first tab as active
  useEffect(() => {
    setCurrentIndex(tabs[0].id);
  }, [tabs]);

  return (
    <div className="d-flex flex-column">
      <Row className="align-items-center">
        <Col sm={12} md={12} lg={12} xl={6}>
          <StyledTabs
            className="btn-group btn-group-Tabs bg-white"
            data-Tabs="buttons"
          >
            {tabs.map(({ id, name }, index) => (
              <Fragment key={id}>
                <SelectedText
                  isActive={currentIndex}
                  index={index}
                  onClick={() => setCurrentIndex(id)}
                >
                  {name}
                </SelectedText>
                {tabs.length - 1 !== index && <StyledVerticalLine />}
              </Fragment>
            ))}
          </StyledTabs>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={12}
          xl={6}
          className="d-xl-flex justify-content-end"
        >
          {rightSection && rightSection()}
        </Col>
      </Row>
      <StyledTabContent minWidthInContent={minWidthInContent}>
        {render(currentIndex)}
      </StyledTabContent>
    </div>
  );
};

const SelectedText = styled.label<SelectedTextType>`
  background-color: ${({ isActive, index, theme }) =>
    isActive === index ? theme.colors.darkBlue : theme.colors.white};
  color: ${({ isActive, index, theme }) =>
    isActive === index ? theme.colors.white : theme.colors.darkGrey};
  padding: ${({ theme }) => `${theme.spacing.large} 56px`};
  border-radius: ${({ isActive, index }) => isActive === index && '12px'};
  font-weight: ${({ isActive, index }) => (isActive === index ? 600 : 500)};
  text-align: center;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  &:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  @media screen and (max-width: 768px) {
    padding: ${({ theme }) =>
      `${theme.spacing.normal} ${theme.spacing.medium}`};
    font-size: 12px;
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    &:first-child {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }

    &:last-child {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }
`;

const StyledVerticalLine = styled.div`
  width: 2px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: ${({ theme }) => `0 ${theme.spacing.xl}`};

  @media screen and (max-width: 768px) {
    margin: ${({ theme }) => `0 ${theme.spacing.normal}`};
  }

  @media screen and (max-width: 425px) {
    margin: ${({ theme }) => `${theme.spacing.normal} 0`};
    width: 75%;
    height: 2px;
  }
`;

const StyledTabs = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  border-radius: 12px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

const StyledTabContent: any = styled.div`
  min-width: ${(props: any) => props.minWidthInContent || 'initial'};
`;
