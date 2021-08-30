
// Core Import
import { useState, useEffect } from 'react';

// thirparty import
import styled from 'styled-components';

// API Service
import serviceAPI from 'api/marketListService'

// components
import Tabs from '../../components/common/Tabs';
import MarketList from '../../components/common/table/MarketList';
import { Title } from '../../components/common/Title'

// util
import util from 'utils/util'
import { startSocket } from 'utils/pusher';

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
export const TopTen = (props) => {
  const [marketData, setMarketData] = useState([])
  const [marketType, setMarketType] = useState('intraday')
  const [selectedDate, setSelectedDate] = useState(new Date())
  useEffect(() => {
    getMarketListById(marketType, selectedDate)
    // Call the API based on the type ( GAINS etc)
  }, [])

  const getMarketListById = (marketType: any, selectedDate: any) => {
    const queryParams: any = { "limit": 10, "price": true, "volume": true, "classificationFilterOut": ["W", "U"], "issueClass": true }
    const object = util.encodeQueryURL(queryParams)
    serviceAPI.marketListService(object)
      .then((data: any) => {
        const job_id = data.job_id
        triggerMarketList((job_id))
      })
      .catch((error) => {
        console.log('getMarketListById, ERROR', error)
        alert('getMarketListById Error')
      })
  }

  const triggerMarketList = (job_id) => {
    serviceAPI.marketListById(job_id)
      .then((response: any) => {
        const { data, delivery, job_id, status, channel } = response;
        if (delivery === 'json') {
          return setMarketData(data[marketType])
        }
        startSocket(channel)
      })
      .catch((error) => {
        console.log('triggerMarketList', error)
        alert('triggerMarketList Error')
      })
  }

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
                <MarketList type={tabName[index]['type']} marketData={marketData} />
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