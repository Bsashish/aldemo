
// thirparty import
import styled from 'styled-components';

// components
import Tabs from '../../components/common/Tabs';
import MarketList from '../../components/common/table/MarketList';
import {Title} from '../../components/common/Title'

const tabName = [
  {
    name: 'Top Ten Gains',
    id: 0,
    type: 'GAINS'
  },
  {
    name: 'Top Ten Shorts',
    id: 1,
    type: 'SHORTS'
  },
  {
    name: 'Top Ten Swings',
    id: 2,
    type: 'SWINGS'
  },

]
export const TopTen = () => {
  return (
    <>
      <TopTenWrapper>
        <Title title="Top Ten" />
        <Tabs
          tabs={tabName}
          isTabsHidden={false}
          minWidthInContent={'initial'}
          render={(index) => {
            return (
              <>
                <MarketList type={tabName[index]['type']}/>
              </>
            )
          }}
        />
      </TopTenWrapper>
    </>
  );
};

const TopTenWrapper = styled.div`
  padding: 0 1.5rem;
`;