import React from 'react'
import { Tabs, Table } from 'antd'
import { useValues } from 'kea'
import { insightsModel } from '~/models/insightsModel'
import { humanFriendlyDetailedTime, toParams } from 'lib/utils'
import { Link } from 'lib/components/Link'

const InsightHistoryType = {
    SAVED: 'SAVED',
    RECENT: 'RECENT',
}

const { TabPane } = Tabs

export const InsightHistoryPanel: React.FC = () => {
    const { insights, insightsLoading } = useValues(insightsModel)

    const columns = [
        {
            title: 'Type',
            key: 'id',
            render: function RenderType(_, insight) {
                return <Link to={'/insights?' + toParams(insight.filters)}>{insight.filters.insight}</Link>
            },
        },
        {
            title: 'Timestamp',
            render: function RenderVolume(_, insight) {
                return <span>{humanFriendlyDetailedTime(insight.created_at)}</span>
            },
        },
    ]

    return (
        <Tabs
            style={{
                overflow: 'visible',
            }}
            animated={false}
            activeKey={InsightHistoryType.RECENT}
            onChange={(): void => {}}
        >
            <TabPane
                tab={<span data-attr="insight-saved-tab">Saved</span>}
                key={InsightHistoryType.SAVED}
                data-attr="insight-saved-pane"
            ></TabPane>
            <TabPane
                tab={<span data-attr="insight-history-tab">Recent</span>}
                key={InsightHistoryType.RECENT}
                data-attr="insight-history-pane"
            >
                <Table
                    size="small"
                    columns={columns}
                    loading={insightsLoading}
                    rowKey={(insight) => insight.id}
                    pagination={{ pageSize: 100, hideOnSinglePage: true }}
                    dataSource={insights}
                />
            </TabPane>
        </Tabs>
    )
}
