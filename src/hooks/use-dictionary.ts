import enUSDictionaries from '@/dictionary/en-us'
import esPEDictionaries from '@/dictionary/es-pe'

const useDictionary = (locale: string) => {
  switch(locale) {
    case 'en-US':
      return enUSDictionaries;
    case 'es-PE':
      return esPEDictionaries;
    default:
      return enUSDictionaries;
  }
};

export default useDictionary;
