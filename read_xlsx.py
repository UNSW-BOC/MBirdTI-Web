import sys
import json
import os

try:
    import pandas as pd
    file_path = '/Users/huangziheng/Desktop/BOC/MbirdTI/code/MBirdTI-Web/Eng edit 鸟类MBTI_0203中英版.xlsx'
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        sys.exit(1)
        
    df = pd.read_excel(file_path)
    # Replace NaN with None or empty string
    df = df.where(pd.notnull(df), None)
    print(json.dumps(df.to_dict(orient='records'), ensure_ascii=False, indent=2, default=str))
except ImportError:
    print("MISSING_LIB")
except Exception as e:
    print(f"ERROR: {e}")
