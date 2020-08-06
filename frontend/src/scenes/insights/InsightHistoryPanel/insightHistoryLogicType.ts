// Auto-generated with kea-typegen. DO NOT EDIT!

export interface insightHistoryLogicType<InsightHistory> {
    key: any
    actionCreators: {
        loadInsights: () => {
            type: 'load insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: any
        }
        loadInsightsSuccess: (
            insights: InsightHistory[]
        ) => {
            type: 'load insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                insights: InsightHistory[]
            }
        }
        loadInsightsFailure: (
            error: string
        ) => {
            type: 'load insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                error: string
            }
        }
        loadSavedInsights: () => {
            type: 'load saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: any
        }
        loadSavedInsightsSuccess: (
            savedInsights: InsightHistory[]
        ) => {
            type: 'load saved insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                savedInsights: InsightHistory[]
            }
        }
        loadSavedInsightsFailure: (
            error: string
        ) => {
            type: 'load saved insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                error: string
            }
        }
        loadTeamInsights: () => {
            type: 'load team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: any
        }
        loadTeamInsightsSuccess: (
            teamInsights: InsightHistory[]
        ) => {
            type: 'load team insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                teamInsights: InsightHistory[]
            }
        }
        loadTeamInsightsFailure: (
            error: string
        ) => {
            type: 'load team insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                error: string
            }
        }
        createInsight: (
            filters: Record<string, any>
        ) => {
            type: 'create insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: { filters: Record<string, any> }
        }
        saveInsight: (
            id: number,
            name: string
        ) => {
            type: 'save insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: { id: number; name: string }
        }
        deleteInsight: (
            insight: InsightHistory
        ) => {
            type: 'delete insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: { insight: InsightHistory }
        }
        loadNextInsights: () => {
            type: 'load next insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                value: boolean
            }
        }
        loadNextSavedInsights: () => {
            type: 'load next saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                value: boolean
            }
        }
        loadNextTeamInsights: () => {
            type: 'load next team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: {
                value: boolean
            }
        }
        setInsightsNext: (
            next: string
        ) => {
            type: 'set insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: { next: string }
        }
        setSavedInsightsNext: (
            next: string
        ) => {
            type: 'set saved insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: { next: string }
        }
        setTeamInsightsNext: (
            next: string
        ) => {
            type: 'set team insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: { next: string }
        }
        updateInsights: (
            insights: InsightHistory[]
        ) => {
            type: 'update insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: { insights: InsightHistory[] }
        }
        updateSavedInsights: (
            insights: InsightHistory[]
        ) => {
            type: 'update saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: { insights: InsightHistory[] }
        }
        updateTeamInsights: (
            insights: InsightHistory[]
        ) => {
            type: 'update team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
            payload: { insights: InsightHistory[] }
        }
    }
    actionKeys: {
        'load insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadInsights'
        'load insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadInsightsSuccess'
        'load insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadInsightsFailure'
        'load saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadSavedInsights'
        'load saved insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadSavedInsightsSuccess'
        'load saved insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadSavedInsightsFailure'
        'load team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadTeamInsights'
        'load team insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadTeamInsightsSuccess'
        'load team insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadTeamInsightsFailure'
        'create insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'createInsight'
        'save insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'saveInsight'
        'delete insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'deleteInsight'
        'load next insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadNextInsights'
        'load next saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadNextSavedInsights'
        'load next team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'loadNextTeamInsights'
        'set insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'setInsightsNext'
        'set saved insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'setSavedInsightsNext'
        'set team insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'setTeamInsightsNext'
        'update insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'updateInsights'
        'update saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'updateSavedInsights'
        'update team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)': 'updateTeamInsights'
    }
    actionTypes: {
        loadInsights: 'load insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadInsightsSuccess: 'load insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadInsightsFailure: 'load insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadSavedInsights: 'load saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadSavedInsightsSuccess: 'load saved insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadSavedInsightsFailure: 'load saved insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadTeamInsights: 'load team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadTeamInsightsSuccess: 'load team insights success (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadTeamInsightsFailure: 'load team insights failure (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        createInsight: 'create insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        saveInsight: 'save insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        deleteInsight: 'delete insight (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadNextInsights: 'load next insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadNextSavedInsights: 'load next saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        loadNextTeamInsights: 'load next team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        setInsightsNext: 'set insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        setSavedInsightsNext: 'set saved insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        setTeamInsightsNext: 'set team insights next (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        updateInsights: 'update insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        updateSavedInsights: 'update saved insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
        updateTeamInsights: 'update team insights (scenes.insights.InsightHistoryPanel.insightHistoryLogic)'
    }
    actions: {
        loadInsights: () => void
        loadInsightsSuccess: (insights: InsightHistory[]) => void
        loadInsightsFailure: (error: string) => void
        loadSavedInsights: () => void
        loadSavedInsightsSuccess: (savedInsights: InsightHistory[]) => void
        loadSavedInsightsFailure: (error: string) => void
        loadTeamInsights: () => void
        loadTeamInsightsSuccess: (teamInsights: InsightHistory[]) => void
        loadTeamInsightsFailure: (error: string) => void
        createInsight: (filters: Record<string, any>) => void
        saveInsight: (id: number, name: string) => void
        deleteInsight: (insight: InsightHistory) => void
        loadNextInsights: () => void
        loadNextSavedInsights: () => void
        loadNextTeamInsights: () => void
        setInsightsNext: (next: string) => void
        setSavedInsightsNext: (next: string) => void
        setTeamInsightsNext: (next: string) => void
        updateInsights: (insights: InsightHistory[]) => void
        updateSavedInsights: (insights: InsightHistory[]) => void
        updateTeamInsights: (insights: InsightHistory[]) => void
    }
    cache: Record<string, any>
    connections: any
    constants: any
    defaults: any
    events: any
    path: ['scenes', 'insights', 'InsightHistoryPanel', 'insightHistoryLogic']
    pathString: 'scenes.insights.InsightHistoryPanel.insightHistoryLogic'
    propTypes: any
    props: Record<string, any>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        insights: InsightHistory[]
        insightsLoading: boolean
        savedInsights: InsightHistory[]
        savedInsightsLoading: boolean
        teamInsights: InsightHistory[]
        teamInsightsLoading: boolean
        insightsNext: null
        loadingMoreInsights: boolean
        savedInsightsNext: null
        loadingMoreSavedInsights: boolean
        teamInsightsNext: null
        loadingMoreTeamInsights: boolean
    }
    reducerOptions: any
    reducers: {
        insights: (state: InsightHistory[], action: any, fullState: any) => InsightHistory[]
        insightsLoading: (state: boolean, action: any, fullState: any) => boolean
        savedInsights: (state: InsightHistory[], action: any, fullState: any) => InsightHistory[]
        savedInsightsLoading: (state: boolean, action: any, fullState: any) => boolean
        teamInsights: (state: InsightHistory[], action: any, fullState: any) => InsightHistory[]
        teamInsightsLoading: (state: boolean, action: any, fullState: any) => boolean
        insightsNext: (state: null, action: any, fullState: any) => null
        loadingMoreInsights: (state: boolean, action: any, fullState: any) => boolean
        savedInsightsNext: (state: null, action: any, fullState: any) => null
        loadingMoreSavedInsights: (state: boolean, action: any, fullState: any) => boolean
        teamInsightsNext: (state: null, action: any, fullState: any) => null
        loadingMoreTeamInsights: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (
        state: any
    ) => {
        insights: InsightHistory[]
        insightsLoading: boolean
        savedInsights: InsightHistory[]
        savedInsightsLoading: boolean
        teamInsights: InsightHistory[]
        teamInsightsLoading: boolean
        insightsNext: null
        loadingMoreInsights: boolean
        savedInsightsNext: null
        loadingMoreSavedInsights: boolean
        teamInsightsNext: null
        loadingMoreTeamInsights: boolean
    }
    selectors: {
        insights: (state: any, props: any) => InsightHistory[]
        insightsLoading: (state: any, props: any) => boolean
        savedInsights: (state: any, props: any) => InsightHistory[]
        savedInsightsLoading: (state: any, props: any) => boolean
        teamInsights: (state: any, props: any) => InsightHistory[]
        teamInsightsLoading: (state: any, props: any) => boolean
        insightsNext: (state: any, props: any) => null
        loadingMoreInsights: (state: any, props: any) => boolean
        savedInsightsNext: (state: any, props: any) => null
        loadingMoreSavedInsights: (state: any, props: any) => boolean
        teamInsightsNext: (state: any, props: any) => null
        loadingMoreTeamInsights: (state: any, props: any) => boolean
    }
    values: {
        insights: InsightHistory[]
        insightsLoading: boolean
        savedInsights: InsightHistory[]
        savedInsightsLoading: boolean
        teamInsights: InsightHistory[]
        teamInsightsLoading: boolean
        insightsNext: null
        loadingMoreInsights: boolean
        savedInsightsNext: null
        loadingMoreSavedInsights: boolean
        teamInsightsNext: null
        loadingMoreTeamInsights: boolean
    }
    _isKea: true
}