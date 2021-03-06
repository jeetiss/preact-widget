import './style'
import WidgetApp from './components/app'
import TabsStoreProvider, { TabsEnum } from './store/tabs'
import LocaleStoreProvider from './store/locale'

const App = () => {
  const dummyInitialTabs = {
    tabs: [TabsEnum.CAMERA, TabsEnum.FILE, TabsEnum.DROPBOX, TabsEnum.FACEBOOK],
    activeTab: TabsEnum.FACEBOOK
  }
  const dummyInitialLocale = {
    lang: 'en',
    locales: {
      ru: {
        'Upload files': 'Локаль пользователя - загрузить файлы'
      },
      en: {
        'Upload files': 'User locale - upload files'
      }
    }
  }

  return (
    <LocaleStoreProvider initialState={dummyInitialLocale}>
      <TabsStoreProvider initialState={dummyInitialTabs}>
        <WidgetApp />
      </TabsStoreProvider>
    </LocaleStoreProvider>
  )
}

export default App
