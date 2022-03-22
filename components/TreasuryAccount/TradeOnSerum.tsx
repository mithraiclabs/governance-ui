import React from 'react'
import { TokenInfoWithMint } from 'stores/useTreasuryAccountStore'

export type TradeOnSerumProps = { tokenAccount: TokenInfoWithMint }

const TradeOnSerum: React.FC<TradeOnSerumProps> = ({ tokenAccount }) => {
  return <div>{tokenAccount.tokenInfo?.name}</div>
}

export default TradeOnSerum
