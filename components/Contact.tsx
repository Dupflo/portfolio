import cn from "classnames"
import { Form, Formik } from "formik"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import * as Yup from "yup"
import Title from "./Elements/Title"

const Contact = ({ data }: any) => {
	return (
		<section id="contact" className="scroll-mt-[80px] px-5 py-20 lg:px-10 xl:px-24">
			<Formik
				initialValues={{ firstName: "", lastName: "", company: "", email: "", message: "" }}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, data.form.firstName.warning).required(data.form.firstName.error),
					lastName: Yup.string().max(20, data.form.lastName.warning).required(data.form.lastName.error),
					company: Yup.string().max(20, data.form.company.warning),
					email: Yup.string().email(data.form.email.warning).required(data.form.email.error),
					message: Yup.string().max(500, data.form.message.warning).required(data.form.message.error),
				})}
				onSubmit={async (values, { resetForm }) => {
					const response = await fetch("/api/contact", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(values),
					})

					if (response.ok) {
						toast.success(data.form.success, {
							position: "bottom-center",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: false,
							progress: undefined,
						})
						resetForm()
					}
				}}
			>
				{formik => (
					<>
						<Title>{data.title}</Title>
						<Form>
							<div className="flex flex-wrap flex-col lg:flex-row w-full justify-between lg:space-x-8">
								<div className="flex-1">
									<div className="flex flex-wrap -mx-3 mb-6">
										<div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
											<label className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2" htmlFor="firstName">
												{data.form.firstName.label} *
											</label>
											<input
												className={cn(
													formik.touched.firstName && formik.errors.firstName ? "border-red-500 mb-0.5" : "border-slate-100",
													"appearance-none block w-full bg-slate-100 text-slate-800 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
												)}
												id="firstName"
												name="firstName"
												type="text"
												placeholder={data.form.firstName.placeholder}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.firstName}
											/>
											{formik.touched.firstName && formik.errors.firstName ? <p className="text-red-500 text-xs italic">{formik.errors.firstName}</p> : null}
										</div>
										<div className="w-full lg:w-1/2 px-3">
											<label className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2" htmlFor="lastName">
												{data.form.lastName.label} *
											</label>
											<input
												className={cn(
													formik.touched.lastName && formik.errors.lastName ? "border-red-500 mb-0.5" : "border-slate-100",
													"appearance-none block w-full bg-slate-100 text-slate-800 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
												)}
												id="lastName"
												name="lastName"
												type="text"
												placeholder={data.form.lastName.placeholder}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.lastName}
											/>
											{formik.touched.lastName && formik.errors.lastName ? <p className="text-red-500 text-xs italic">{formik.errors.lastName}</p> : null}
										</div>
									</div>
									<div className="flex flex-wrap -mx-3 mb-6">
										<div className="w-full px-3">
											<label className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2" htmlFor="company">
												{data.form.company.label}
											</label>
											<input
												className={cn(
													formik.touched.company && formik.errors.company ? "border-red-500 mb-0.5" : "border-slate-100",
													"appearance-none block w-full bg-slate-100 text-slate-800 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
												)}
												id="grid-last-name"
												name="company"
												type="text"
												placeholder={data.form.company.placeholder}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.company}
											/>
										</div>
										{formik.touched.company && formik.errors.company ? <p className="text-red-500 text-xs italic">{formik.errors.company}</p> : null}
									</div>
									<div className="flex flex-wrap -mx-3 mb-6">
										<div className="w-full px-3">
											<label className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2" htmlFor="email">
												{data.form.email.label} *
											</label>
											<input
												className={cn(
													formik.touched.email && formik.errors.email ? "border-red-500 mb-0.5" : "border-slate-100",
													"appearance-none block w-full bg-slate-100 text-slate-800 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
												)}
												id="email"
												name="email"
												type="email"
												placeholder={data.form.email.placeholder}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.email}
											/>
											{formik.touched.email && formik.errors.email ? <p className="text-red-500 text-xs italic">{formik.errors.email}</p> : null}
										</div>
									</div>
								</div>
								<div className="flex-1">
									<div className="flex flex-wrap -mx-3 mb-6">
										<div className="w-full px-3">
											<label className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2" htmlFor="grid-password">
												{data.form.message.label} *
											</label>
											<textarea
												className={cn(
													formik.touched.message && formik.errors.message ? "border-red-500 mb-0.5" : "border-slate-100",
													"no-resize h-64 appearance-none block w-full bg-slate-100 text-slate-800 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-slate-500 resize-none"
												)}
												id="message"
												name="message"
												placeholder={data.form.message.placeholder}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.message}
											></textarea>
											{formik.touched.message && formik.errors.message ? <p className="text-red-500 text-xs italic">{formik.errors.message}</p> : null}
										</div>
									</div>
								</div>
							</div>
							<div className="lg:flex lg:items-center justify-center">
								<button className="w-full lg:w-2/12 shadow bg-slate-800 hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-semibold uppercase py-2 px-10 rounded" type="submit" disabled={formik.isSubmitting}>
									{formik.isSubmitting ? (
										<svg className="animate-spin mx-auto h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
											<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
											<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
										</svg>
									) : (
										data.form.submit
									)}
								</button>
							</div>
						</Form>
					</>
				)}
			</Formik>
		</section>
	)
}

export default Contact
