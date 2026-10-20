from setuptools import setup, find_packages

setup(
    name='apiverve_solarpotential',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Solar Potential calculates solar energy potential for any latitude and longitude coordinates. It returns average daily usable sunlight hours and optimal panel orientation, with paid plans adding yearly totals and cloud factors.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/solarpotential?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
