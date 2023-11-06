import enUSDictionaries from '@/dictionary/en-us'
import esPEDictionaries from '@/dictionary/es-pe'
import zhCNDictionaries from '@/dictionary/zh-cn'

const useDictionary = (locale: string) => {
  switch(locale) {
    case 'en-US':
      return enUSDictionaries;
    case 'es-PE':
      return esPEDictionaries;
    case 'zh-CN':
      return zhCNDictionaries;
    default:
      return enUSDictionaries;
  }
};

export default useDictionary;
