#!/bin/bash
base_dir=$(cd "$(dirname "$0")";pwd)
# echo $base_dir
if [ $1 ]
then
	echo "准备创建硬链接：从本目录到$1目录..."
	if [ -e $1 ]
	then 
		echo "目的路径检测存在..."
		for it in `ls $base_dir`
		do
			if [ -f $it ]
			then
				ln -f "$base_dir/$it" "$1/"
			elif [ -d $it ]
			then
				if [ -e "$1/$it" ]
				then
					for it0 in `ls $base_dir/$it`
					do
						ln -f "$base_dir/$it/$it0" "$1/$it"
					done
				else
					mkdir "$1/$it"
					for it0 in `ls $base_dir/$it`
					do
						ln -f "$base_dir/$it/$it0" "$1/$it"
					done
				fi
			fi
		done
		echo "递归创建硬链接成功！"
		#ln -s "$base_dir/*" "$1/"
	else
		echo "$1路径不存在!"
	fi
else 
	echo "缺失目的文件夹参数!"
fi
