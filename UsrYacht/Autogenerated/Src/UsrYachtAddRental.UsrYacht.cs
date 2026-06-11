namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrYachtAddRentalMethodsWrapper

	/// <exclude/>
	public class UsrYachtAddRentalMethodsWrapper : ProcessModel
	{

		public UsrYachtAddRentalMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
			AddScriptTaskMethod("ScriptTask2Execute", ScriptTask2Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			DateTime date = Get<DateTime>("LastDate");
			DateTime newDate =  date.AddDays(7);
			Set("NextDate", newDate);
			return true;
		}

		private bool ScriptTask2Execute(ProcessExecutingContext context) {
			DateTime prevDate = Get<DateTime>("NextDate");
			DateTime newLastDate = prevDate.AddDays(1);
			Set("LastDate", newLastDate);
			return true;
		}

		#endregion

	}

	#endregion

}

