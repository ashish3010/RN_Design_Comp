import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IconKey } from '../../Icon/Icon.types';

interface HeaderInfo {
  title?: string
  subtitle?: string
  showBackIcon?: boolean
  suffixIcon?: IconKey | ''
  onSuffixClick?: () => void
  onBackPress?: () => void
  handleBack?: boolean
}
interface HeaderDetailsProps {
  headerDetails: HeaderInfo
}

const initialState: HeaderDetailsProps = {
  headerDetails: {
    title: '',
    subtitle: '',
    showBackIcon: false,
    suffixIcon: '',
    onSuffixClick: () => { },
    handleBack: false,
    onBackPress: () => { }
  }
};

const headerSlice = createSlice({
  name: 'headerInfo',
  initialState,
  reducers: {
    setHeaderDetails: (state, action: PayloadAction<HeaderInfo>) => {
      state.headerDetails = action.payload
    }
  }
})

export const { setHeaderDetails } = headerSlice.actions;

export default headerSlice.reducer;