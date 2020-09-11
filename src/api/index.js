/*
包含n个接口的函数
函数的返回值：promise对象
export const 名字 = (参数) => ajax('路径',参数)
 */
import ajax from './ajax'
//根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax('/position/${geohash}')
//获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category')
//根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})