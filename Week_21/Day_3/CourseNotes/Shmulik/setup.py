from setuptools import setup, find_packages

setup(
    name='demo_package',  # This should be unique on PyPI
    version='0.1.0',
    author='Your Name',
    author_email='your.email@example.com',
    description='A simple demo Python package',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    url='https://github.com/yourusername/demo_package',  # Optionally provide the URL to your package's code repository
    packages=find_packages(),
    classifiers=[
        'Programming Language :: Python :: 3',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)