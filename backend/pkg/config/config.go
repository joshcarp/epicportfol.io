package config

import "github.com/spf13/viper"

const configPath = "config/"

func ReadConfig(filename string) (*viper.Viper, error) {
	v := viper.New()
	viper.SetConfigType("yaml")
	v.AddConfigPath(configPath)
	v.SetConfigName(filename)
	v.AutomaticEnv()
	err := v.ReadInConfig()
	return v, err
}

func GetProperty(v *viper.Viper, service, property string) string {
	a := v.GetStringMapStringSlice(service)
	baseurl, ok := a[property]
	if !ok {
		return ""
	}
	if len(baseurl) == 0 {
		panic("baseurl not found")
	}
	return baseurl[0]
}
